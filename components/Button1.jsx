const Button1 = ({ tailwindStyle }) => {
  return (
    <div>
      <button
        className={`rounded px-4 py-2 font-medium tracking-wide duration-200 ease-out ${tailwindStyle}`}
      >
        Connect with <span className="font-semibold">stripe</span>
      </button>
    </div>
  )
}

export default Button1
