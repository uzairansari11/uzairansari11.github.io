"use client"

import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"

const SAKINAKA_COORDS: [number, number] = [19.1034, 72.8883]

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    let cancelled = false

    async function initMap() {
      const L = (await import("leaflet")).default

      if (cancelled || !mapRef.current) return

      const map = L.map(mapRef.current, {
        center: SAKINAKA_COORDS,
        zoom: 14,
        zoomControl: false,
        attributionControl: true,
        scrollWheelZoom: false,
      })

      mapInstanceRef.current = map

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      }).addTo(map)
      L.control.zoom({ position: "topright" }).addTo(map)

      const icon = L.divIcon({
        html: '<span class="portfolio-map-marker"><span class="portfolio-map-marker__pulse"></span><span class="portfolio-map-marker__core"></span></span>',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        className: "portfolio-map-icon",
      })

      L.marker(SAKINAKA_COORDS, { icon })
        .addTo(map)
        .bindTooltip("Sakinaka, Mumbai", { permanent: true, direction: "top", offset: [0, -18], className: "portfolio-map-tooltip" })
        .bindPopup("<strong>Sakinaka</strong><br/>Mumbai, Maharashtra, India")

      setTimeout(() => {
        if (!cancelled && mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize()
        }
      }, 250)
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

  return (
    <div
      ref={mapRef}
      className="portfolio-map-canvas h-full min-h-[230px] w-full overflow-hidden"
      style={{ width: "100%", height: "100%", minHeight: "230px" }}
    />
  )
}
