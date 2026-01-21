import Image from "next/image"

export default function Projects({img,children}){

    return(
        <div className="projects">
            <div className="project-image">
            <Image src={img} alt="Website Logo Image" width={1000} height={1000} loading="eager"></Image>
            </div>
            <div className="project-des">
                {children}
            </div>
        </div>
    )
}