import { useState } from "react";
import { Heart, ThumbsUp, Laugh, Frown, Angry } from "lucide-react";

const reactions = [
  { type: "like", icon: ThumbsUp, color: "primary" },
  { type: "love", icon: Heart, color: "red" },
  { type: "laugh", icon: Laugh, color: "yellow" },
  { type: "sad", icon: Frown, color: "primary" },
  { type: "angry", icon: Angry, color: "orange" },
];

const ReactionButton = ({ postId, className }) => {
  const getLocalReactions = (postId) => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem(`post_reaction_${postId}`);
    return stored ? JSON.parse(stored) : null;
  };
  const setLocalReactions = (postId, reaction) => {
    localStorage.setItem(
      `post_reaction_${postId}`,
      JSON.stringify({ type: reaction, timestamp: Date.now() })
    );
  };

  const [postReactions, setPostReactions] = useState(() => {
    const inital = {};
    const stored = getLocalReactions(postId);
    if (stored) inital[postId] = stored.type;
    return inital;
  });

  const [showReactions, setShowReactions] = useState(null);
  const handleReaction = (postId, reactionType) => {
    setPostReactions((prev) => ({ ...prev, [postId]: reactionType }));
    setLocalReactions(postId, reactionType);
    setShowReactions(null);
  };

  const currentReaction = postReactions[postId];
  const ReactionIcon = currentReaction
    ? reactions.find((r) => r.type === currentReaction)?.icon || Heart
    : Heart;
  const reactionColor = currentReaction
    ? reactions.find((r) => r.type === currentReaction)?.color ||
      "muted-foreground"
    : "muted-foreground";
  return (
    <>
      <div className={`relative ${className ? className : ""}`}>
        <button
          onClick={() =>
            setShowReactions(showReactions === postId ? null : postId)
          }
          className={`p-2 rounded-lg transition-all duration-200 group ${
            currentReaction
              ? `bg-${reactionColor}/10 text-${reactionColor}`
              : "hover:bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          <ReactionIcon className="w-5 transition-all duration-200 group-hover:hover:scale-115 " />
        </button>
        {/* Reaction Picker */}
        {showReactions === postId && (
          <div className="absolute bottom-full right-0 mb-2 flex gap-1 p-2 rounded-xl bg-card border border-border shadow-xl animate-scale-out">
            {reactions.map((reaction) => (
              <button
                key={reaction.type}
                onClick={() => handleReaction(postId, reaction.type)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-125
                  hover:bg-${reaction.color}/10 text-${reaction.color}`}
              >
                <reaction.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ReactionButton;
