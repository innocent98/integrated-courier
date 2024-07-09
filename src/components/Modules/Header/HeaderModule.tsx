import { HeaderLinkComponent } from "@/components/Components/HeaderLinkComponent/HeaderLinkComponent";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "./custom.css";

type Props = {
  headerTitle: string;
  links: React.ComponentProps<typeof HeaderLinkComponent>[];
};

export const HeaderModule = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-container relative flex w-full items-center justify-between ${isSticky ? "sticky" : ""} px-4 sm:px-16 md:px-20 lg:px-12`}
    >
      {/* left */}
      <div className='flex-[1] cursor-pointer font-roboto text-[18px] font-bold-text uppercase text-primary_color md:text-[30px]'>
        {props.headerTitle}
      </div>

      {/* right */}
      <div className='hidden flex-[1] justify-end gap-12 lg:flex'>
        {props.links.map((item) => (
          <HeaderLinkComponent key={item.id} {...item} />
        ))}
      </div>

      {menuOpen && (
        <div className='absolute top-[85px] z-10 flex w-[100%] flex-col gap-0 bg-white px-6 shadow-lg lg:hidden'>
          {props.links.map((item) => (
            <>
              <HeaderLinkComponent key={item.id} {...item} />
              <div className='h-[1px] w-full bg-custom_lightgray'></div>
            </>
          ))}
        </div>
      )}

      <MenuOutlined
        className='cursor-pointer text-lg text-primary_color lg:hidden'
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </div>
  );
};
