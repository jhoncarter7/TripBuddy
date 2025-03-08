"use client";
import Durationcard from "@/components/Durationcard";
import Stepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";

const listDay = [
  {
    imgUrl: "/days.avif",
    days: "6-9 days",
  },
  {
    imgUrl: "/days.avif",
    days: "10-12 days",
  },
  {
    imgUrl: "/days.avif",
    days: "13-15 days",
  },
  {
    imgUrl: "/days.avif",
    days: "15-20 days",
  },
];

const partner = [
  {
    type: "Couple",
    imgUrl: "/partner.png",
  },
  {
    type: "Family",
    imgUrl: "/partner.png",
  },
  {
    type: "Friends",
    imgUrl: "/partner.png",
  },
  {
    type: "Solo",
    imgUrl: "/partner.png",
  },
];
const Country = () => {
  const [step, setStep] = useState(0);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  return (
    <div>
      <Stepper step={step} />

      {step == 0 && (
        <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto ">
          <h1 className="py-8 text-center text-xl font-medium">
            {" "}
            What&apos;s the duration of your holiday?
          </h1>
          <div className=" gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {listDay.map((item, id) => (
              <div key={id} onClick={() => setStep(1)}>
                <Durationcard imgUrl={item?.imgUrl} text={item.days} />
              </div>
            ))}
          </div>
        </div>
      )}

      {step == 1 && (
        <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto ">
          <h1 className="py-8 text-center text-xl font-medium">
            {" "}
            Who is travelling with you?
          </h1>

          <Dialog>
            <div className=" gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {partner.map((item, id) => (
                <div key={id}>
                  <DialogTrigger asChild>
                    <div>
                      <Durationcard imgUrl={item?.imgUrl} text={item.type} />
                    </div>
                  </DialogTrigger>
                </div>
              ))}
            </div>
            <DialogContent className="sm:max-w-md max-h-[calc(100%-4rem)] h-5/6 overflow-hidden">
              <DialogHeader>
                <DialogTitle className="pb-5">
                  How to configure your rooms?
                </DialogTitle>
              </DialogHeader>
              <div className="overflow-y-auto">
                <div className="p-6 rounded-md border border-gray-300 mb-36  ">
                  <div className="flex flex-col gap-y-6 pb-4  ">
                    <p className="font-medium text-gray-500 text-sm">ROOM 1</p>
                    <div className="flex justify-between">
                      <p>Adults</p>
                      <div className="flex gap-x-3">
                        <button
                          disabled={adultCount === 1}
                          className="flex cursor-pointer justify-center items-center rounded-full size-6 border-[2px] border-gray-800"
                          onClick={() => setAdultCount((prev) => prev - 1)}
                        >
                          <Minus />
                        </button>
                        <div>{adultCount}</div>
                        <button
                          className="flex cursor-pointer justify-center items-center rounded-full size-6 border-[2px] border-gray-800"
                          onClick={() => setAdultCount((prev) => prev + 1)}
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p>Children - 0 to 15 yrs</p>
                      <div className="flex gap-x-3">
                        <button
                          disabled={childrenCount === 0}
                          className="flex cursor-pointer justify-center items-center rounded-full size-6 border-[2px] border-gray-800"
                          onClick={() => setChildrenCount((prev) => prev - 1)}
                        >
                          <Minus />
                        </button>
                        <div>{childrenCount}</div>
                        <button
                          className="flex cursor-pointer justify-center items-center rounded-full size-6 border-[2px] border-gray-800"
                          onClick={() => setChildrenCount((prev) => prev + 1)}
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>

                    <div className=" ">
                      {Array.from({ length: childrenCount }).map((_, id) => (
                        <div key={id} className="flex justify-between pb-4">
                          <p>
                            Age of{" "}
                            <span className="font-semibold">
                              Child {id + 1}
                            </span>
                          </p>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="--" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Age</SelectLabel>
                                {Array.from({ length: 11 }).map((_, i) => (
                                  <SelectItem key={i} value={`${i} years`}>
                                    {i === 0
                                      ? "Less than 1 year"
                                      : `${i} years`}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="flex gap-x-2">
                <Button className="w-1/2 bg-white text-[#00B277] hover:bg-white cursor-pointer border-[1px] border-[#00B277] text-lg">
                  Add new room
                </Button>
                <Button
                  className="w-1/2 bg-[#00B277] text-lg hover:bg-[#00B277] cursor-pointer"
                  onClick={() => setStep(2)}
                >
                  Confirm changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {
        step == 2 && (
            <div className="text-2xl flex justify-center items-center h-[40vh] mx-auto w-full">
                Congratulations 🎉
            </div>
        )
      }
    </div>
  );
};

export default Country;
