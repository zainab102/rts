import { src as hall_after_aisle } from "@/media/hall-after-aisle";
import { src as hall_after_cubicles } from "@/media/hall-after-cubicles";
import { src as hall_after_hr } from "@/media/hall-after-hr";
import { src as hall_after_lounge } from "@/media/hall-after-lounge";
import { src as hall_before_aisle } from "@/media/hall-before-aisle";
import { src as hall_before_cubicles } from "@/media/hall-before-cubicles";
import { src as hall_before_hr } from "@/media/hall-before-hr";
import { src as hall_before_lounge } from "@/media/hall-before-lounge";
import { src as kitchen_after_corridor } from "@/media/kitchen-after-corridor";
import { src as kitchen_after_nook } from "@/media/kitchen-after-nook";
import { src as kitchen_after_pantry } from "@/media/kitchen-after-pantry";
import { src as kitchen_after_sink } from "@/media/kitchen-after-sink";
import { src as kitchen_before_corridor } from "@/media/kitchen-before-corridor";
import { src as kitchen_before_nook } from "@/media/kitchen-before-nook";
import { src as kitchen_before_pantry } from "@/media/kitchen-before-pantry";
import { src as kitchen_before_sink } from "@/media/kitchen-before-sink";
import { src as office_after_blue } from "@/media/office-after-blue";
import { src as office_after_glass } from "@/media/office-after-glass";
import { src as office_before_blue } from "@/media/office-before-blue";
import { src as office_before_glass } from "@/media/office-before-glass";
import { src as sales_after_blue } from "@/media/sales-after-blue";
import { src as sales_after_windows } from "@/media/sales-after-windows";
import { src as sales_before_blue } from "@/media/sales-before-blue";
import { src as sales_before_windows } from "@/media/sales-before-windows";

export const photos: Record<string, string> = {
  "/hall/after-aisle.png": hall_after_aisle,
  "/hall/after-cubicles.png": hall_after_cubicles,
  "/hall/after-hr.png": hall_after_hr,
  "/hall/after-lounge.png": hall_after_lounge,
  "/hall/before-aisle.jpg": hall_before_aisle,
  "/hall/before-cubicles.jpg": hall_before_cubicles,
  "/hall/before-hr.jpg": hall_before_hr,
  "/hall/before-lounge.jpg": hall_before_lounge,
  "/kitchen/after-corridor.png": kitchen_after_corridor,
  "/kitchen/after-nook.png": kitchen_after_nook,
  "/kitchen/after-pantry.png": kitchen_after_pantry,
  "/kitchen/after-sink.png": kitchen_after_sink,
  "/kitchen/before-corridor.jpg": kitchen_before_corridor,
  "/kitchen/before-nook.jpg": kitchen_before_nook,
  "/kitchen/before-pantry.jpg": kitchen_before_pantry,
  "/kitchen/before-sink.jpg": kitchen_before_sink,
  "/office/after-blue.png": office_after_blue,
  "/office/after-glass.png": office_after_glass,
  "/office/before-blue.jpg": office_before_blue,
  "/office/before-glass.jpg": office_before_glass,
  "/sales/after-blue.png": sales_after_blue,
  "/sales/after-windows.png": sales_after_windows,
  "/sales/before-blue.jpg": sales_before_blue,
  "/sales/before-windows.jpg": sales_before_windows,
};

export function photoSrc(src: string) {
  return photos[src] ?? src;
}
