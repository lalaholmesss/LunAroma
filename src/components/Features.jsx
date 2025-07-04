import bgImg from "../assets/bg-features.png";

export default function Features() {
    return(
        <div className="text-center font-[DM_Sans]">
            <div className="w-full h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }} />

            <h2 className="font-[DM_Serif_Display] font-[400] text-[#AB572D] mt-[20px] text-[32px]">What Makes Us Unique</h2>

            <div className="flex flex-row justify-between px-[80px] py-[40px]">
                <div className="text-left w-[340px]">
                    <span className="text-[20px] font-[700]">Pure and High-Quality Ingredients</span>
                    <p className="pt-[20px] text-[20px]">We prioritize quality by using only natural, ethically sourced botanicals.You blend these ingredients to create delicate, long-lasting fragrances, offering a luxurious and unique experience in every bottle.</p>
                </div>
                
                <div className="text-left w-[340px]">
                    <span className="text-[20px] font-[700]">Create Your Own Fragrance</span>
                    <p className="pt-[20px] text-[20px]">Our project lets you craft a personalized scent by choosing botanicals inspired by Azerbaijan and Italy. Select combinations that suit your taste and create a fragrance that tells your unique story.</p>
                </div>

                <div className="text-left w-[340px]">
                    <span className="text-[20px] font-[700]">Local and İtalian İnspiration</span>
                    <p className="pt-[20px] text-[20px] ">Our perfumes blend the rich nature of Azerbaijan with the fresh botanicals of Italy. Inspired by both cultures, each fragrance combines selected natural ingredients to tell a unique story of harmony and beauty.</p>
                </div>
            </div>
        </div>
    )
}
