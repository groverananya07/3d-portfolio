import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="relative z-[999] py-6 border-t">
      <div className="w-full px-8">
        <div className="grid grid-cols-3 items-center">

          {/* LEFT */}
          <div className="text-left">
            <p className="text-sm">Terms & Conditions</p>
          </div>

          {/* CENTER */}
          <div className="flex justify-center gap-6">
            {socialImgs.map((socialImg, index) => (
              <a
                key={index}
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={socialImg.imgPath}
                  alt={socialImg.name}
                  className="w-6 h-6 cursor-pointer"
                />
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} Ananya Grover. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;