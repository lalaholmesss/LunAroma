import heroBg from "../assets/hero-homepage.png";

export default function FirstPage() {
  return (
    <div 
      className="bg-cover bg-center h-[800px] font-[DM_Sans] relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
        <div className="flex flex-col max-w-[480px] absolute px-[80px] top-[280px]">
            <span>Awaken your space with botanical elegance </span>
            <h1 className="font-[DM_Serif_Display] text-[64px] text-[#3C3C3C] font-[400]">Organic Aromas</h1>
            <p className="font-[DM_Sans] text-[16px]text-[#3C3C3C]">LunAroma-Your scent, your signature. Blend natural essences and botanical notes to create a fragrance that’s entirely yours.Every drop reflects yourtaste,your energy.Inspired by the nature of Azerbaijan,this unique concept lets you craft a personall aroma and express yourself through scent</p>
            <button className="px-[80px] py-[24px] text-[#FFFFFF] font-[600] text-[32px] bg-[#000000] border-none cursor-pointer font-[DM_Sans] w-[280px] mt-[40px]">Login</button>
        </div>
    </div>
  );
}