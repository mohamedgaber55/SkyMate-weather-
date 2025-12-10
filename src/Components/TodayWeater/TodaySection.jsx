export default function Today(props){
    return(
        <div className="text-center w-full lg:w-auto bg-[#ffffff58] px-4 py-2 m-1.5 rounded-xl border border-[#e1e1e18f]">
            <p>{props.title}</p>
            <p>{props.value}</p>
        </div>
    )
}