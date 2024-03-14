import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tempus ligula at mauris placerat, eu fermentum ligula condimentum.
            Integer euismod tortor eu metus pharetra, vitae rhoncus lorem
            commodo. Fusce sit amet urna non nisi fermentum fermentum. Vivamus
            interdum risus at lacus feugiat lacinia. Sed auctor, nisl quis
            aliquet fringilla, elit nisi eleifend nisi, sed consequat nisi justo
            vel nunc.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tempus ligula at mauris placerat, eu fermentum ligula condimentum.
            Integer euismod tortor eu metus pharetra, vitae rhoncus lorem
            commodo. Fusce sit amet urna non nisi fermentum fermentum. Vivamus
            interdum risus at lacus feugiat lacinia. Sed auctor, nisl quis
            aliquet fringilla, elit nisi eleifend nisi, sed consequat nisi justo
            vel nunc.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tempus ligula at mauris placerat, eu fermentum ligula condimentum.
            Integer euismod tortor eu metus pharetra, vitae rhoncus lorem
            commodo. Fusce sit aliquet fringilla, elit nisi eleifend nisi, sed
            consequat nisi justo vel nunc.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+212600022558">
            +212600022558
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} All right reserved
      </footer>
    </>
  );
}
