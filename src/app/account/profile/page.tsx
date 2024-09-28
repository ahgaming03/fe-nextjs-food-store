"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import defaultImage from "@/app/assets/images/default-image.png";

export default function Page() {
  const [originProfile, setOriginProfile] = useState({
    name: "User name",
    email: "",
    phone: "",
    birthday: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState(originProfile);

  return (
    <>
      <div className="space-y-2">
        <div className="space-y-4 bg-white py-4 text-center">
          <div className="mx-auto h-32 w-32">
            <Image
              src={defaultImage}
              alt="default image"
              className="h-full w-full rounded-full border object-cover shadow"
            />
          </div>
          <h1 className="text-2xl font-semibold">{originProfile.name}</h1>
        </div>

        <section className="space-y-4 bg-white p-2">
          <div className="flex gap-1">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="flex-1 border px-2 shadow"
              value={profile.name}
              onChange={(e) =>
                isEdit && setProfile({ ...profile, name: e.target.value })
              }
              disabled={!isEdit}
            />
          </div>
          <div className="flex gap-1">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 border px-2 shadow"
              value={profile.email}
              onChange={(e) =>
                isEdit && setProfile({ ...profile, email: e.target.value })
              }
              disabled={!isEdit}
            />
          </div>
          <div className="flex gap-1">
            <label>Phone: </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone"
              className="flex-1 border px-2 shadow"
              value={profile.phone}
              onChange={(e) =>
                isEdit && setProfile({ ...profile, phone: e.target.value })
              }
              disabled={!isEdit}
            />
          </div>
          <div className="flex gap-1">
            <label>Birthday: </label>
            <input
              type="date"
              name="birthday"
              max={new Date().toISOString().split("T")[0]}
              className="flex-1 border px-2 shadow"
              value={profile.birthday}
              onChange={(e) =>
                isEdit && setProfile({ ...profile, birthday: e.target.value })
              }
              disabled={!isEdit}
            />
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            {!isEdit ? (
              <>
                <Link
                  href={"/account"}
                  className="rounded bg-blue-500 px-2 py-1 font-semibold text-white"
                >
                  Back
                </Link>

                <button
                  onClick={() => {
                    setIsEdit(true);
                  }}
                  className="rounded bg-orange-600 px-2 py-1 font-semibold text-white"
                >
                  Edit
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsEdit(false);
                    setProfile(originProfile);
                  }}
                  className="rounded bg-gray-500 px-2 py-1 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsEdit(false);
                    setOriginProfile(profile);
                  }}
                  className="rounded bg-orange-600 px-2 py-1 font-semibold text-white"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
