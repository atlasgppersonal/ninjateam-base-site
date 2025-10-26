import Link from "next/link";
import React from "react";
import Container from "../ui/Container"; // Assuming container.js is a reusable component
import { siteConfig } from '@/data/site-config'; // Import siteConfig

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-primary-700">
                  <span>{siteConfig.name}</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              {siteConfig.description}
            </div>
            <div className="mt-4 text-gray-500 dark:text-gray-400">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

          {/* Empty divs to maintain grid structure if needed, or remove if not */}
          <div></div>
          <div></div>

          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="sr-only">Facebook</span>
                  {/* Placeholder for Facebook icon */}
                  <img src="/images/icons/facebook.png" alt="Facebook" width="24" height="24" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="sr-only">Instagram</span>
                  {/* Placeholder for Instagram icon */}
                  <img src="/images/icons/instagram.png" alt="Instagram" width="24" height="24" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </div>
  );
}
