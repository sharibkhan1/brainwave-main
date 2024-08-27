import { brainwaveWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

// Right-Side Chatbox Component
export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-[#eee9e983] rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Hey Sekiro, What services do you offer for chatbot development?
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

// Left-Side Chatbox Component
export const PhotoChatMessageLeft = () => {
  return (
    <div className="border-2 absolute left-5 top-[calc(6rem+6rem)] max-w-[17.5rem] py-4 px-5 bg-[#d8323da1]  rounded-t-xl rounded-br-xl font-code text-base lg:top-[calc(10rem+4rem)] lg:left-[5.75rem] lg:max-w-[17.5rem] border-black">
      It fit your business needs, whether for customer support, lead generation, or engagement.
      <ChatBubbleWing className="absolute right-full bottom-0 -scale-x-100" />
    </div>
  );
};

// Gradient Background Component
export const Gradient = () => {
  return (
<div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none ">
  <img
    className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
    src={gradient}
    width={1417}
    height={1417}
    alt="Gradient"
  />
</div>

  );
};

// Video Chatbox Component
export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
      Video generated!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

// Video Bar Component
export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />
      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};
