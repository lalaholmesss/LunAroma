import parfume from "../assets/parfume-about.png";

export default function About() {
    return(
        <div className="font-[DM_Sans] flex flex-row px-[120px] py-[100px] bg-[#FFFFFF] gap-[64px]">
            <div>
                <img src={parfume} alt="parfume" />
            </div>
            <div className="w-[600px] text-center">
                <h2 className="font-[DM_Serif_Display] text-[64px] font-[400] pb-[36px]">About Us</h2>
                <p className="text-left text-[16px]">
                    Welcome to LunAroma — where nature meets creativity. We believe fragrance is more than a scent; it’s an expression of your inner self. That’s why we give you the freedom to blend pure botanical extracts and essential oils to create a signature perfume that’s uniquely yours.
                    Inspired by the aromatic richness of Azerbaijan’s nature, we carefully select natural essences to offer you safe, authentic, and captivating fragrance experiences. Each drop is crafted to bring harmony, well-being, and personal style into your everyday life.
                   
                </p>
                 <p className="text-left pt-[48px]">
                    At LunAroma, we’re passionate about sustainability and purity. Our mission is to let you explore, combine, and design scents that tell your story- naturally and beautifully.</p>
                            <button className="py-[24px] text-[#FFFFFF] font-[600] text-[24px] bg-[#000000] border-none cursor-pointer font-[DM_Sans] w-[280px] mt-[40px] uppercase px-[16px]">Explore</button>

            </div>
        </div>
    )
}