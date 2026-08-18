import type { TripResult } from "../types/trip";

export const placeholderTripResult: TripResult = {
    "id": 555,
    "user_prompt": "beta",
    "people": 2,
    "origin": "Phoenix",
    "destination": "Tokyo",
    "days": 7,
    "start_date": "2026-08-20",
    "end_date": "2026-08-27",
    "flights": [
        {
            "upward": {
                "price": 2133,
                "segments": [
                    {
                        "airline": "KLM",
                        "duration": 95,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "AMS",
                            "name": "Amsterdam Airport Schiphol",
                            "time": "2026-08-19 16:00"
                        },
                        "departure_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-19 13:25"
                        }
                    },
                    {
                        "airline": "KLM",
                        "duration": 640,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-19 18:35"
                        },
                        "departure_airport": {
                            "id": "AMS",
                            "name": "Amsterdam Airport Schiphol",
                            "time": "2026-08-19 16:55"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KL.png",
                "total_duration": 790,
                "departure_token": "WyJDalJJV21wM1gxcGxVVkpIVjI5QlFUbHRMV2RDUnkwdExTMHRMUzB0TFMxM1ptZGpPRUZCUVVGQlIzRkVjRXRWUjNaWFVYbEJFZ3hMVERFeE5EQjhTMHcyTXpVYUN3allnUTBRQWhvRFZWTkVPQnh3MklFTiIsW1siRFVCIiwiMjAyNi0wOC0xOSIsIkFNUyIsbnVsbCwiS0wiLCIxMTQwIl0sWyJBTVMiLCIyMDI2LTA4LTE5IiwiTEFTIixudWxsLCJLTCIsIjYzNSJdXV0="
            },
            "downward": {
                "price": 2133,
                "segments": [
                    {
                        "airline": "Air France",
                        "duration": 615,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 13:05"
                        },
                        "departure_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-24 17:50"
                        }
                    },
                    {
                        "airline": "Air France",
                        "duration": 115,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-25 15:25"
                        },
                        "departure_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 14:30"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AF.png",
                "total_duration": 815,
                "departure_token": null
            }
        },
        {
            "upward": {
                "price": 2146,
                "segments": [
                    {
                        "airline": "Air France",
                        "duration": 110,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-19 12:05"
                        },
                        "departure_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-19 09:15"
                        }
                    },
                    {
                        "airline": "Air France",
                        "duration": 655,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-19 15:35"
                        },
                        "departure_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-19 13:40"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AF.png",
                "total_duration": 860,
                "departure_token": "WyJDalJJV21wM1gxcGxVVkpIVjI5QlFUbHRMV2RDUnkwdExTMHRMUzB0TFMxM1ptZGpPRUZCUVVGQlIzRkVjRXRWUjNaWFVYbEJFZ3RCUmpFMk1UZDhRVVkxTmhvTENPcUxEUkFDR2dOVlUwUTRISERxaXcwPSIsW1siRFVCIiwiMjAyNi0wOC0xOSIsIkNERyIsbnVsbCwiQUYiLCIxNjE3Il0sWyJDREciLCIyMDI2LTA4LTE5IiwiTEFTIixudWxsLCJBRiIsIjU2Il1dXQ=="
            },
            "downward": {
                "price": 2146,
                "segments": [
                    {
                        "airline": "Air France",
                        "duration": 615,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 13:05"
                        },
                        "departure_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-24 17:50"
                        }
                    },
                    {
                        "airline": "Air France",
                        "duration": 115,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-25 15:25"
                        },
                        "departure_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 14:30"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AF.png",
                "total_duration": 815,
                "departure_token": null
            }
        },
        {
            "upward": {
                "price": 2163,
                "segments": [
                    {
                        "airline": "Delta",
                        "duration": 533,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "ATL",
                            "name": "Hartsfield-Jackson Atlanta International Airport",
                            "time": "2026-08-19 14:53"
                        },
                        "departure_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-19 11:00"
                        }
                    },
                    {
                        "airline": "Delta",
                        "duration": 252,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-19 17:52"
                        },
                        "departure_airport": {
                            "id": "ATL",
                            "name": "Hartsfield-Jackson Atlanta International Airport",
                            "time": "2026-08-19 16:40"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
                "total_duration": 892,
                "departure_token": "WyJDalJJV21wM1gxcGxVVkpIVjI5QlFUbHRMV2RDUnkwdExTMHRMUzB0TFMxM1ptZGpPRUZCUVVGQlIzRkVjRXRWUjNaWFVYbEJFZ3RFVERFM04zeEVURGN4TVJvTENPU1pEUkFDR2dOVlUwUTRISERrbVEwPSIsW1siRFVCIiwiMjAyNi0wOC0xOSIsIkFUTCIsbnVsbCwiREwiLCIxNzciXSxbIkFUTCIsIjIwMjYtMDgtMTkiLCJMQVMiLG51bGwsIkRMIiwiNzExIl1dXQ=="
            },
            "downward": {
                "price": 2163,
                "segments": [
                    {
                        "airline": "Air France",
                        "duration": 615,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 13:05"
                        },
                        "departure_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-24 17:50"
                        }
                    },
                    {
                        "airline": "Air France",
                        "duration": 115,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-25 15:25"
                        },
                        "departure_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 14:30"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AF.png",
                "total_duration": 815,
                "departure_token": null
            }
        }
    ],
    "hotels": [
        {
            "name": "MGM Signature Penthouse Jr Suite StripView, Balcony, FREE Parking, NO Resort Fee",
            "type": "vacation rental",
            "amenities": [
                "Air conditioning",
                "Balcony",
                "Elevator",
                "Fitness center",
                "Heating",
                "Hot tub",
                "Ironing board",
                "Kitchen",
                "Microwave",
                "Outdoor pool",
                "Smoke-free",
                "Cable TV",
                "Free parking",
                "Free Wi-Fi"
            ],
            "thumbnail": "https://lh6.googleusercontent.com/proxy/vfqkt53w__Xeoyk5AM-T97yFs4l6D5ucaGw1wyl9AH5kApIjAbvnDw_bKy72M91RLINx98alYOrNMxvNjGyjRBxYs9Lg6G-OWAgBJajNP-kirgD2TjbLRdjm02iVSoYYy05CtuKaQABkw9DTXUBYWE8GdF-Z4g=s287-w287-h192-n-k-no-v1",
            "total_rate": "$993",
            "essential_info": [
                "Sleeps 4",
                "1 bedroom",
                "1 bathroom",
                "2 beds"
            ],
            "rate_per_night": "$199",
            "location_rating": 4.7
        },
        {
            "name": "MGM Signature-20-609 Strip View Jacuzzi Studio",
            "type": "vacation rental",
            "amenities": [
                "Air conditioning",
                "Kid-friendly",
                "Elevator",
                "Fitness center",
                "Heating",
                "Hot tub",
                "Ironing board",
                "Kitchen",
                "Microwave",
                "Outdoor pool",
                "Oven stove",
                "Smoke-free",
                "Cable TV",
                "Free parking",
                "Free Wi-Fi"
            ],
            "thumbnail": "https://lh3.googleusercontent.com/proxy/RRuwlCJtSpupHrchV-oAzAXPGm-KE9AihZ3Qy682wVRhiielm9Ekw-hOIzBPrGN6lUM77tnD4UXDrHae44_Vn_vEjvevcNXkQZp8DvA498VLrB7nEOug-VZWShP8p2gX1A7zuQyhvErp6vTHkcavKSZZYyRFPq0=s287-w287-h192-n-k-no-v1",
            "total_rate": "$678",
            "essential_info": [
                "Entire apartment",
                "Sleeps 4",
                "1 bathroom",
                "2 beds",
                "51 sq ft"
            ],
            "rate_per_night": "$136",
            "location_rating": 4.7
        },
        {
            "name": "MGM Signature Jr.Penthouse StripView, Balcony, Pool, No resort fee, FREE parking",
            "type": "vacation rental",
            "amenities": [
                "Air conditioning",
                "Balcony",
                "Elevator",
                "Fitness center",
                "Heating",
                "Hot tub",
                "Ironing board",
                "Kitchen",
                "Microwave",
                "Smoke-free",
                "Cable TV",
                "Free parking",
                "Free Wi-Fi"
            ],
            "thumbnail": "https://lh4.googleusercontent.com/proxy/WNSPxOcBBbIm2jGIKBSoV8TogUPYvL7VNr1ewqyt0rnKJ3cPkSLUbjK31s8XTH08Gl0htEtiEwv8SGHNGVY-iWkP6eWP0XFYVLz-el0oB1G681cZmV47tVn8mX7AOXh6c_VnRuliLaumW66Q3uEbGBtIxfBIQQ=s287-w287-h192-n-k-no-v1",
            "total_rate": "$1,180",
            "essential_info": [
                "Sleeps 4",
                "1 bedroom",
                "1 bathroom",
                "2 beds"
            ],
            "rate_per_night": "$236",
            "location_rating": 4.7
        }
    ],
    "places": [
        {
            "title": "The Las Vegas Strip",
            "rating": 4.4,
            "reviews": 35141,
            "thumbnail": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/00/2b/the-strip.jpg",
            "description": "Stretching for over 4.2 miles, the most famous entertainment destination in the U.S. showcases an eclectic collection of mega hotels and resorts, glitzy casinos, lavish shopping malls, and Michelin-starred restaurants. The best way to enjoy the Strip is to stroll down the avenue and marvel at free spectacles like the dancing fountains of Bellagio and the erupting volcanoes of The Mirage. Or rest your legs by joining an open-top bus tour that cruises down the boulevard. For a more adventurous experience, splurge on a luxurious helicopter tour for a bird’s eye view of Las Vegas’ iconic landmarks. – Tripadvisor"
        },
        {
            "title": "Skydive Las Vegas",
            "rating": 4.8,
            "reviews": 850,
            "thumbnail": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/1e/65/06/coming-down.jpg",
            "description": "Skydive Las Vegas -- the first-time skydive experts. Jump out of our perfectly good airplane, freefall at 120 MPH, then enjoy the parachute flight while taking in spectacular views of the Hoover Dam, Lake Mead, the Colorado River and the Las Vegas Strip. Skydive Las Vegas has been in operation since 1993 and is Nevada's longest running student skydiving center and the first to specialize in first-time tandem skydiving. We are located at the Boulder City Airport in Boulder City which is only minutes away from the Hoover Dam and Lake Mead. When you are in the airplane and in freefall you can see the Hoover Dam, Lake Mead, the Colorado River, the beautiful golf courses of Boulder City, the Las Vegas Strip, Mt. Charleston, Red Rock Canyon, the Valley of Fire and more! Our landing zone is located right next to our facility making it easy for your friends and family watch you jump and land right in from of them. After landing, you walk right back into our facility and celebrate the most exciting thing you've ever done. We use only the finest state-of-the-art equipment and airplanes. We fly new PAC-750XL skydiving airplane that can carry up to 7-8 tandem jumpers (14-16 people) per load. The PAC-750XL is the only airplane in the world built specifically for skydiving. Our skydiving equipment is the latest and safest available today. We offer complimentary transportation from the Las Vegas Strip in pristine shuttle vans. We have the largest and nicest skydiving facility in Nevada, complete with a large air-conditioned lobby, restrooms, HD television for your viewing pleasure, snack and soda machines, and most importantly a Starbucks Coffee machine that brews fresh ground Starbucks coffee."
        },
        {
            "title": "Las Vegas Downtown",
            "rating": 4.2,
            "reviews": 4291,
            "thumbnail": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f1/4e/e2/casino-de-paris.jpg",
            "description": ""
        }
    ],
    "optimized_plan": {
        "cheapest_flight": {
            "upward": {
                "price": 2133,
                "segments": [
                    {
                        "airline": "KLM",
                        "duration": 95,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "AMS",
                            "name": "Amsterdam Airport Schiphol",
                            "time": "2026-08-19 16:00"
                        },
                        "departure_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-19 13:25"
                        }
                    },
                    {
                        "airline": "KLM",
                        "duration": 640,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-19 18:35"
                        },
                        "departure_airport": {
                            "id": "AMS",
                            "name": "Amsterdam Airport Schiphol",
                            "time": "2026-08-19 16:55"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KL.png",
                "total_duration": 790,
                "departure_token": "WyJDalJJV21wM1gxcGxVVkpIVjI5QlFUbHRMV2RDUnkwdExTMHRMUzB0TFMxM1ptZGpPRUZCUVVGQlIzRkVjRXRWUjNaWFVYbEJFZ3hMVERFeE5EQjhTMHcyTXpVYUN3allnUTBRQWhvRFZWTkVPQnh3MklFTiIsW1siRFVCIiwiMjAyNi0wOC0xOSIsIkFNUyIsbnVsbCwiS0wiLCIxMTQwIl0sWyJBTVMiLCIyMDI2LTA4LTE5IiwiTEFTIixudWxsLCJLTCIsIjYzNSJdXV0="
            },
            "downward": {
                "price": 2133,
                "segments": [
                    {
                        "airline": "Air France",
                        "duration": 615,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 13:05"
                        },
                        "departure_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-24 17:50"
                        }
                    },
                    {
                        "airline": "Air France",
                        "duration": 115,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-25 15:25"
                        },
                        "departure_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 14:30"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AF.png",
                "total_duration": 815,
                "departure_token": null
            }
        },
        "fastest_flight": {
            "upward": {
                "price": 2133,
                "segments": [
                    {
                        "airline": "KLM",
                        "duration": 95,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "AMS",
                            "name": "Amsterdam Airport Schiphol",
                            "time": "2026-08-19 16:00"
                        },
                        "departure_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-19 13:25"
                        }
                    },
                    {
                        "airline": "KLM",
                        "duration": 640,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-19 18:35"
                        },
                        "departure_airport": {
                            "id": "AMS",
                            "name": "Amsterdam Airport Schiphol",
                            "time": "2026-08-19 16:55"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KL.png",
                "total_duration": 790,
                "departure_token": "WyJDalJJV21wM1gxcGxVVkpIVjI5QlFUbHRMV2RDUnkwdExTMHRMUzB0TFMxM1ptZGpPRUZCUVVGQlIzRkVjRXRWUjNaWFVYbEJFZ3hMVERFeE5EQjhTMHcyTXpVYUN3allnUTBRQWhvRFZWTkVPQnh3MklFTiIsW1siRFVCIiwiMjAyNi0wOC0xOSIsIkFNUyIsbnVsbCwiS0wiLCIxMTQwIl0sWyJBTVMiLCIyMDI2LTA4LTE5IiwiTEFTIixudWxsLCJLTCIsIjYzNSJdXV0="
            },
            "downward": {
                "price": 2133,
                "segments": [
                    {
                        "airline": "Air France",
                        "duration": 615,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 13:05"
                        },
                        "departure_airport": {
                            "id": "LAS",
                            "name": "Harry Reid International Airport",
                            "time": "2026-08-24 17:50"
                        }
                    },
                    {
                        "airline": "Air France",
                        "duration": 115,
                        "travel_class": "Economy",
                        "arrival_airport": {
                            "id": "DUB",
                            "name": "Dublin Airport",
                            "time": "2026-08-25 15:25"
                        },
                        "departure_airport": {
                            "id": "CDG",
                            "name": "Aéroport de Paris-Charles de Gaulle",
                            "time": "2026-08-25 14:30"
                        }
                    }
                ],
                "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AF.png",
                "total_duration": 815,
                "departure_token": null
            }
        },
        "cheapest_hotel": {
            "name": "MGM Signature-20-609 Strip View Jacuzzi Studio",
            "type": "vacation rental",
            "amenities": [
                "Air conditioning",
                "Kid-friendly",
                "Elevator",
                "Fitness center",
                "Heating",
                "Hot tub",
                "Ironing board",
                "Kitchen",
                "Microwave",
                "Outdoor pool",
                "Oven stove",
                "Smoke-free",
                "Cable TV",
                "Free parking",
                "Free Wi-Fi"
            ],
            "thumbnail": "https://lh3.googleusercontent.com/proxy/RRuwlCJtSpupHrchV-oAzAXPGm-KE9AihZ3Qy682wVRhiielm9Ekw-hOIzBPrGN6lUM77tnD4UXDrHae44_Vn_vEjvevcNXkQZp8DvA498VLrB7nEOug-VZWShP8p2gX1A7zuQyhvErp6vTHkcavKSZZYyRFPq0=s287-w287-h192-n-k-no-v1",
            "total_rate": "$678",
            "essential_info": [
                "Entire apartment",
                "Sleeps 4",
                "1 bathroom",
                "2 beds",
                "51 sq ft"
            ],
            "rate_per_night": "$136",
            "location_rating": 4.7
        },
        "best_rated_hotel": {
            "name": "MGM Signature Penthouse Jr Suite StripView, Balcony, FREE Parking, NO Resort Fee",
            "type": "vacation rental",
            "amenities": [
                "Air conditioning",
                "Balcony",
                "Elevator",
                "Fitness center",
                "Heating",
                "Hot tub",
                "Ironing board",
                "Kitchen",
                "Microwave",
                "Outdoor pool",
                "Smoke-free",
                "Cable TV",
                "Free parking",
                "Free Wi-Fi"
            ],
            "thumbnail": "https://lh6.googleusercontent.com/proxy/vfqkt53w__Xeoyk5AM-T97yFs4l6D5ucaGw1wyl9AH5kApIjAbvnDw_bKy72M91RLINx98alYOrNMxvNjGyjRBxYs9Lg6G-OWAgBJajNP-kirgD2TjbLRdjm02iVSoYYy05CtuKaQABkw9DTXUBYWE8GdF-Z4g=s287-w287-h192-n-k-no-v1",
            "total_rate": "$993",
            "essential_info": [
                "Sleeps 4",
                "1 bedroom",
                "1 bathroom",
                "2 beds"
            ],
            "rate_per_night": "$199",
            "location_rating": 4.7
        },
        "must_visit_place": {
            "title": "Skydive Las Vegas",
            "rating": 4.8,
            "reviews": 850,
            "thumbnail": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/1e/65/06/coming-down.jpg",
            "description": "Skydive Las Vegas -- the first-time skydive experts. Jump out of our perfectly good airplane, freefall at 120 MPH, then enjoy the parachute flight while taking in spectacular views of the Hoover Dam, Lake Mead, the Colorado River and the Las Vegas Strip. Skydive Las Vegas has been in operation since 1993 and is Nevada's longest running student skydiving center and the first to specialize in first-time tandem skydiving. We are located at the Boulder City Airport in Boulder City which is only minutes away from the Hoover Dam and Lake Mead. When you are in the airplane and in freefall you can see the Hoover Dam, Lake Mead, the Colorado River, the beautiful golf courses of Boulder City, the Las Vegas Strip, Mt. Charleston, Red Rock Canyon, the Valley of Fire and more! Our landing zone is located right next to our facility making it easy for your friends and family watch you jump and land right in from of them. After landing, you walk right back into our facility and celebrate the most exciting thing you've ever done. We use only the finest state-of-the-art equipment and airplanes. We fly new PAC-750XL skydiving airplane that can carry up to 7-8 tandem jumpers (14-16 people) per load. The PAC-750XL is the only airplane in the world built specifically for skydiving. Our skydiving equipment is the latest and safest available today. We offer complimentary transportation from the Las Vegas Strip in pristine shuttle vans. We have the largest and nicest skydiving facility in Nevada, complete with a large air-conditioned lobby, restrooms, HD television for your viewing pleasure, snack and soda machines, and most importantly a Starbucks Coffee machine that brews fresh ground Starbucks coffee."
        },
        "estimated_total_cost": 2811,
        "overall_content": "Your 7‑day adventure to Tokyo starts with a flight that balances cost and convenience: the cheapest and fastest option both run on KLM, clocking a 26‑hour journey for $2,133—so you won’t have to choose between a budget fare and a quick arrival because they’re the same. For accommodation, the MGM Signature‑20‑609 Strip View Jacuzzi Studio offers the most budget‑friendly stay at $678, while the higher‑rated MGM Signature Penthouse Jr Suite, priced at $993, gives you a touch of luxury and extra comfort. Don’t miss the thrill of Skydive Las Vegas, a must‑visit spot rated 4.8, which adds an unforgettable adventure to your itinerary. All together, the estimated total cost comes to $2,811.0."
    },
    "summary": "Two travelers will spend a week flying from Phoenix to Tokyo.  \nThe trip is expected to cost roughly $2,800 to $3,100."
};