export default function PlusIcon({ fill }: { fill: "white" | "black" }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className="card__plus-icon"
    >
      <path
        fill={fill}
        d="M18.7 8.5H15.3V15.3H8.5V18.7H15.3V25.5H18.7V18.7H25.5V15.3H18.7V8.5ZM17 0C7.616 0 0 7.616 0 17C0 26.384 7.616 34 17 34C26.384 34 34 26.384 34 17C34 7.616 26.384 0 17 0ZM17 30.6C9.503 30.6 3.4 24.497 3.4 17C3.4 9.503 9.503 3.4 17 3.4C24.497 3.4 30.6 9.503 30.6 17C30.6 24.497 24.497 30.6 17 30.6Z"
      />
    </svg>
  );
}
