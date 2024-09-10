import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message: string) => {
    try {
      if (!selectedConversation) return;
      setLoading(true);
      const res = await fetch("/api/message/send/" + selectedConversation?.id, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({message}),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);

    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
