"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isLogin = true;

  // Memunculkan button sign-in
  const [providers, setProviders] = useState(null);

  //   h //Only run on start
  // End of memunculkan button sign-in

  //Dropdown trigger
  const [toggleDropdowm, setToggleDropdown] = useState(false);
  // End of dropdown trigger

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="PromptPop Logo"
          width={30}
          height={30}
          className="object-contain"
        ></Image>
        <p>PromptPop</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isLogin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounder-full"
                alt="profile"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {/* if provider exist then create the button */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isLogin ? (
          <div className=" flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounder-full"
              alt="profile"
              onClick={() =>
                setToggleDropdown((previousState) => !previousState)
              }
            ></Image>
            {toggleDropdowm && (
              <div className="dropdown">
                <Link href="/profile">My Profile</Link>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* if provider exist then create the button */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
