"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function Page() {
  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-white p-2">
          <Link href="/account" className="flex items-center gap-2">
            <FaAngleLeft color="orange" />
          </Link>
          <span className="text-2xl font-semibold">Change password</span>
          <div></div>
        </div>
        <div className="bg-white p-2">
          <label htmlFor="current-password" className="block">
            Current password
          </label>
          <input
            type="password"
            id="current-password"
            placeholder="Enter your current password"
            className="w-full rounded border border-gray-300 p-1"
            value={changePassword.currentPassword}
            onChange={(e) =>
              setChangePassword((prev) => ({
                ...prev,
                currentPassword: e.target.value,
              }))
            }
          />

          <label htmlFor="new-password" className="block">
            New password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="Enter your new password"
            className="w-full rounded border border-gray-300 p-1"
            value={changePassword.newPassword}
            onChange={(e) =>
              setChangePassword((prev) => ({
                ...prev,
                newPassword: e.target.value,
              }))
            }
          />

          <label htmlFor="confirm-password" className="block">
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Enter your new password again"
            className="w-full rounded border border-gray-300 p-1"
            value={changePassword.confirmPassword}
            onChange={(e) =>
              setChangePassword((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />

          <button className="mt-2 w-full rounded bg-orange-600 p-2 text-white">
            Change password
          </button>
        </div>
      </div>
    </>
  );
}
