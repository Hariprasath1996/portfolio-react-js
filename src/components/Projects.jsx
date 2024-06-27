

const Project = ({ img, desc, title, Link }) => {
    return (
        <a href={Link}>
            <div className='w-96 flex  justify-between flex-col  p-8 m-2 bg-stone-800 text-white my-4 cursor-pointer rounded-xl'>
                <h4 className=' flex justify-center items-center font-serif font-bold text-2xl'>{title}</h4>
                <p className='w-88  py-2 font-serif font-bold text-xl'> {desc}</p>
                <img src={img} className='p-2 rounded-xl w-96' />
            </div>
        </a>
    )
}
export default Project
