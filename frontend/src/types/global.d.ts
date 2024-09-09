type LoginInfoType = {
  username: string;
  password: string;
};

type SignUpInfo = {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

type ConversationType = {
  id: string;
  fullname: string;
  profilePic: string;
};

type MessageType = {
  id: string;
  body: string;
  senderId: string;
  createdAt: string;
  shouldShake?: boolean;
};
