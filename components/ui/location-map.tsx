"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import "leaflet/dist/leaflet.css"

const POWAI_COORDS: [number, number] = [19.1203, 72.8963]

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const tileLayerRef = useRef<any>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    let cancelled = false

    async function initMap() {
      const L = (await import("leaflet")).default

      if (cancelled || !mapRef.current) return

      const map = L.map(mapRef.current, {
        center: POWAI_COORDS,
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
      })

      mapInstanceRef.current = map

      const isDark = resolvedTheme === "dark"
      const tileUrl = isDark
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"

      const tileLayer = L.tileLayer(tileUrl, { maxZoom: 19 }).addTo(map)
      tileLayerRef.current = tileLayer

      // Custom marker icon
      const icon = L.divIcon({
        html: `<div style="width:16px;height:16px;background:hsl(var(--primary));border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        className: "",
      })

      L.marker(POWAI_COORDS, { icon })
        .addTo(map)
        .bindPopup("<b>Powai, Mumbai</b><br/>Maharashtra, India")
    }

    initMap()

    return () => {
      cancelled = true
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  // Update tile layer on theme change
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return

    const L = require("leaflet")
    const isDark = resolvedTheme === "dark"
    const tileUrl = isDark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"

    tileLayerRef.current.remove()
    tileLayerRef.current = L.tileLayer(tileUrl, { maxZoom: 19 }).addTo(mapInstanceRef.current)
  }, [resolvedTheme])

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-2xl overflow-hidden"
      style={{ minHeight: "200px" }}
    />
  )
}
