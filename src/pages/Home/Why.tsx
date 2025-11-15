import { motion } from "framer-motion";
import { Droplets, ThumbsUp, Leaf, Users } from "lucide-react";
import Food1 from "../../assets/icons/food 1.png";
import Certified from "../../assets/icons/certified 1.png";
import Glass from "../../assets/images/glasscup (1).png";
import Fast from "../../assets/icons/fast-delivery 1.png";
import Wallet from "../../assets/icons/wallet.png";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

function Why() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-left">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center"
        >
          Why Choose <span className="text-blue-600">SirLifeWater</span>?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-center"
        >
          Delivering clean and safe table water to your home, office, and events.
        </motion.p>

        {/* SMALLER BOXES – EXPAND ON LARGE SCREENS */}
        <div className="grid grid-rows-1 md:grid-rows-2 gap-10 mb-12 w-fit">
          
          {/* ITEM 1 LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center bg-white p-6 sm:p-7 lg:p-8 rounded-2xl shadow hover:shadow-lg w-60 sm:w-64 lg:w-72"
          >
            <img src={Food1} className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Pure and Safe Water
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Delivering clean and safe table water.
            </p>
          </motion.div>

          {/* ITEM 2 RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center bg-white p-6 sm:p-7 lg:p-8 rounded-2xl shadow hover:shadow-lg w-60 sm:w-64 lg:w-72"
          >
            <img src={Certified} className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Certified & Trusted
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Industry-approved quality guaranteed.
            </p>
          </motion.div>

        </div>

        {/* CENTER GLASS IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <img
            src={Glass}
            className="w-50 sm:w-60 md:w-60 lg:w-83 drop-shadow-xl px-4"
            alt="Glass Cup"
          />
        </motion.div>

        {/* BOTTOM RIGHT ITEMS */}
        <div className="grid grid-rows-1 md:grid-rows-2 gap-10 w-fit ml-auto">

          {/* ITEM 3 LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center bg-white p-6 sm:p-7 lg:p-8 rounded-2xl shadow hover:shadow-lg w-60 sm:w-64 lg:w-72"
          >
            <img src={Fast} className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Seamless delivery straight to your doorstep.
            </p>
          </motion.div>

          {/* ITEM 4 RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center bg-white p-6 sm:p-7 lg:p-8 rounded-2xl shadow hover:shadow-lg w-60 sm:w-64 lg:w-72"
          >
            <img src={Wallet} className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Flexible Payment Options
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Multiple payment options for convenience.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Why;
