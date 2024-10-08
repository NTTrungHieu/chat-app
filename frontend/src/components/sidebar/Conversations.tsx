import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation: ConversationType) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto' /> : null}
    </div>
  );
};
export default Conversations;
