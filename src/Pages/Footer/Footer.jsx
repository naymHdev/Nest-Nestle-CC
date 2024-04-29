import { Link } from "react-router-dom";
import logo from "../../assets/Hertiage Nest - Final LOGO (1) 1.png";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#ECF5FF] text-[#475467] py-6 mt-20">
        <div className=" grid grid-cols-1 md:grid-cols-7 w-11/12 mx-auto">
          <div className=" col-span-2">
            <div>
              <img className="w-[53.289px] h-[80px]" src={logo} alt="" />
            </div>
            <p className=" mt-3">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className=" col-span-5">
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 md:space-y-0">
              <div>
                <h3 className="font-extrabold">Product</h3>
                <div className="grid space-y-2 mt-5">
                  <Link>Overview</Link>
                  <Link>Features</Link>
                  <Link>Solutions</Link>
                  <Link>Tutorials</Link>
                  <Link>Pricing</Link>
                  <Link>Releases</Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Company</h3>
                <div className="grid space-y-2 mt-5">
                  <Link>About us</Link>
                  <Link>Careers</Link>
                  <Link>Press</Link>
                  <Link>News</Link>
                  <Link>Media Kit</Link>
                  <Link>Contact</Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Resources</h3>
                <div className="grid space-y-2 mt-5">
                  <Link>Blog</Link>
                  <Link>Newsletter</Link>
                  <Link>Events</Link>
                  <Link>Help Center</Link>
                  <Link>Tutorials</Link>
                  <Link>Support</Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Social</h3>
                <div className="grid space-y-2 mt-5">
                  <Link>Twitter</Link>
                  <Link>Linkedin</Link>
                  <Link>FaceBook</Link>
                  <Link>GitHub</Link>
                  <Link>AngelList</Link>
                  <Link>Dribble</Link>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold">Legal</h3>
                <div className="grid space-y-2 mt-5">
                  <Link>Terms</Link>
                  <Link>Privacy</Link>
                  <Link>Cookies</Link>
                  <Link>Licenses</Link>
                  <Link>Settings</Link>
                  <Link>Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" mt-8 mb-8" />
        <div className=" w-11/12 mx-auto grid md:flex justify-between items-center">
          <div>
            <p className=" text-center">
              © 2024 Heritage- Nest . All rights reserved.
            </p>
          </div>
          <div className=" flex items-center justify-center gap-5 mt-4 md:mt-0">
            <a href="">
              <FaTwitter className=" text-xl text-sky-400" />
            </a>
            <a href="">
              <FaLinkedin className=" text-xl text-sky-600" />
            </a>
            <a href="">
              <FaFacebook className=" text-xl text-sky-500" />
            </a>
            <a href="">
              <FaYoutube className=" text-xl text-red-500" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
