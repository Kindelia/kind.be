export type FloatButtonProps = {};

export function FloatButton(_: FloatButtonProps) {
  function goToScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className="abs right:20 bottom:20 h:80 w:80 rounded bg:#EF97E9"
      onClick={goToScroll}
    >
      <svg className="h:40 w:40 m:20" viewBox="0 0 24 24">
        <path
          fill="white"
          d="M12,5.27L18.18,11.45L16.76,12.88L12,8.11L7.24,12.88L5.82,11.45L12,5.27Z"
        />
      </svg>
    </div>
  );
}
