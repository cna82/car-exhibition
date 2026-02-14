"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiInstagram, FiMail } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

const getSocialIcon = (type) => {
  const props = { size: 22, className: "min-w-[22px]" };
  switch (type) {
    case "instagram":
      return <FiInstagram {...props} />;
    case "whatsapp":
      return <RiWhatsappLine {...props} />;
    case "email":
      return <FiMail {...props} />;
    default:
      return null;
  }
};

const ClientMotionBox = ({ container }) => {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 text-right"
    >
      {container.map(({ title, address, phones, fax, social }, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-5 transition-all duration-300 text-right"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-sky-600 text-center mb-2">
            {title}
          </h2>

          {!social && address && (
            <div className="flex items-start gap-3 text-black hover:text-sky-800 transition-colors">
              <FiMapPin size={22} className="mt-1 min-w-5.5" />
              <span className="leading-relaxed">{address}</span>
            </div>
          )}

          <div className="flex flex-col gap-3.5 text-[15px] leading-relaxed">
            {social
              ? social.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-black hover:${
                      item.type === "instagram"
                        ? "text-pink-600"
                        : item.type === "whatsapp"
                        ? "text-green-600"
                        : "text-red-600"
                    } transition-colors duration-200`}
                  >
                    {getSocialIcon(item.type)}
                    <span>{item.label}</span>
                  </a>
                ))
              : phones?.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 text-black hover:text-sky-800 transition-colors duration-200"
                  >
                    <FiPhone size={22} className="min-w-5.5" />
                    <span>{phone}</span>
                  </a>
                ))}
          </div>

          {!social && fax && (
            <div className="flex items-center gap-3 text-black hover:text-sky-800 text-sm transition-colors">
              <FiPhone size={22} className="min-w-5.5" />
              <span>فکس: {fax}</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ClientMotionBox;