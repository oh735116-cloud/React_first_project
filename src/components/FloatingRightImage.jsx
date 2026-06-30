const FLOATING_IMAGE_URL =
  "blob:https://gemini.google.com/237df7ae-1a58-4cf0-a059-7ee41a9f911f";

function FloatingRightImage() {
  return (
    <img
      className="pointer-events-none fixed right-[max(12px,calc((100vw-430px)/2+12px))] top-1/2 z-[9999] w-[92px] -translate-y-1/2 select-none object-contain drop-shadow-[0_14px_28px_rgba(62,53,47,0.24)] sm:w-[118px]"
      src={FLOATING_IMAGE_URL}
      alt=""
      aria-hidden="true"
      onError={(event) => event.currentTarget.classList.add("hidden")}
    />
  );
}

export default FloatingRightImage;
