import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ConversationType[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/message");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error: any) {
        console.error(error.message)
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  return { loading, messages };
};

export default useGetMessages;
