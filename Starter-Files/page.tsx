import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Site</h1>
        <h2 className="text-3xl font-semibold mb-2">Your Next Big Project</h2>
        <p className="text-lg">
          Start building something amazing with us. Our platform helps you grow your ideas into something great.
        </p>
      </section>

      {/* Price Cards Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 h-full w-full px-8">
          <div className="bg-blue-500 p-8 rounded-lg h-full">Price Card 1</div>
          <div className="bg-green-500 p-8 rounded-lg h-full">Price Card 2</div>
          <div className="bg-red-500 p-8 rounded-lg h-full">Price Card 3</div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center py-16 gap-8">
        <div className="md:w-1/2 text-lg px-8">
          <h2 className="text-4xl font-semibold mb-4">About Us</h2>
          <p>
            We are dedicated to providing the best service to our customers. Our team is composed of experts in the field, ready to take on any challenge.
          </p>
        </div>
        <div className="h-full md:w-1/2 flex justify-center items-center">
          <div className="bg-gray-300 w-full h-full rounded-lg"></div> {/* Square with color */}
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg max-w-2xl">
          We strive to deliver top-notch solutions tailored to your business needs, ensuring success at every step of the way.
        </p>
      </section>

      <Footer />
    </div>
  );
}