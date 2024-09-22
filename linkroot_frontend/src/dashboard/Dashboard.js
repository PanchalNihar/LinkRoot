import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LinksContext } from "../context/LinksContext";
import { BiSolidTrash, BiEdit, BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { createGroup, getAllLinks, linkGroups, linksLoading, deleteGroup } =
    useContext(LinksContext);

  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const check = () => {
      const isAuth = localStorage.getItem("isAuthenticated");
      if (isAuth == null) {
        navigate("/login");
      }
    };
    check();
  }, []);

  useEffect(() => {
    getAllLinks();
  }, []);

  const create = async () => {
    if (name !== "") {
      const id = await createGroup(name);
      navigate(`/dashboard/${id}/edit`);
    }
  };

  if (linksLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else {
    return (
      <div className="h-full w-full p-5 mt-20">
        {/* Adjusted top margin */}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-4xl font-semibold">Dashboard</h1>

          <button
            className="btn btn-success text-white btn-md hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Create
          </button>
        </div>
        <div className="divider"></div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Create Group</h3>
            <input
              className="input input-bordered w-full max-w-xs my-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="modal-action w-full">
              <form method="dialog" className="flex gap-3">
                <button
                  className="btn w-full btn-primary hover:bg-blue-600 transition-colors duration-300"
                  onClick={create}
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="h-full w-full">
          {linkGroups.length > 0 ? (
            <div className="w-full h-full grid grid-cols-4 gap-14">
              {linkGroups.map((linkGroup) => (
                <div
                  className="w-auto transform hover:scale-105 transition-transform duration-300"
                  key={linkGroup.id}
                >
                  <div className="h-28 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg"></div>
                  <div className="w-full p-4 rounded shadow border flex flex-col items-center justify-center bg-white">
                    <h1 className="text-center font-bold text-lg">
                      {linkGroup.name}
                    </h1>
                    <div className="flex gap-3 justify-center items-center mt-5">
                      <a
                        href={`/r/${linkGroup.unique_string}`}
                        target="_blank"
                        className="btn text-white btn-success btn-xs hover:scale-110 transition-transform duration-300"
                      >
                        <BiLinkExternal />
                      </a>
                      <Link
                        className="btn text-white btn-warning btn-xs hover:scale-110 transition-transform duration-300"
                        to={`${linkGroup.id}/edit`}
                      >
                        <BiEdit />
                      </Link>
                      <button
                        onClick={() => {
                          deleteGroup(linkGroup.id);
                        }}
                        className="btn text-white btn-error btn-xs hover:scale-110 transition-transform duration-300"
                      >
                        <BiSolidTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full w-full flex">
              <p>No Link Groups Found</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
