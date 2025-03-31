function Alert({ message, type }) {
    return (
        <div role="alert" className="{`alert alert-${type}">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 1412-2m0 012-2m-2 21-2-2m2 212 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{message}</span>
        </div>
    )
}

export default Alert;