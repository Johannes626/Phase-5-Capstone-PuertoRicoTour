import React from 'react'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete'
import useOnclickOutside from "react-cool-onclickoutside";

function PlacesAutocomplete({setSelected}) {
    
    // const {
    //     ready,
    //     value,
    //     setValue,
    //     suggestions: {status, data},
    //     clearSuggestions
    // } = usePlacesAutocomplete({
    //     requestOptions: {
    //     /* Define search scope here */
    //     },
    //     debounce: 300})
    // const ref = useOnclickOutside(() => {
    //     clearSuggestions()
    // })
    // const handleInput = (e) => {
    //     // Update the keyword of the input element
    //     setValue(e.target.value);
    // }
    // const handleSelect =
    //     ({ description }) =>
    //     () => {
    //   // When user selects a place, we can replace the keyword without request data from API
    //   // by setting the second parameter to "false"
    //     setValue(description, false);
    //     clearSuggestions();

    //   // Get latitude and longitude via utility functions
    //     getGeocode({ address: description }).then((results) => {
    //         try {
    //             const { lat, lng } = getLatLng(results[0]);
    //             console.log("📍 Coordinates: ", { lat, lng });
    //         } catch (error) {
    //             console.log("😱 Error: ", error);
    //         }
    //     });
    // };
    // const renderSuggestions = () =>
    // data.map((suggestion) => {
    //     const {
    //         place_id,
    //         structured_formatting: { main_text, secondary_text },
    //     } = suggestion;

    //     return (
    //         <li key={place_id} onClick={handleSelect(suggestion)}>
    //             <strong>{main_text}</strong> <small>{secondary_text}</small>
    //         </li>
    //     );
    // });
    
    return (
        <div>
            <h2>Autocomplete coming soon!</h2>
            {/* <input
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Where are you going?"
                className="map-input"
            /> */}
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {/* <ul>
                {status === "OK" && data.map(({ place_id, description }) => (<option key={place_id} value={description}></option>
                ))}
            </ul> */}
        </div>
    )
}

export default PlacesAutocomplete

// // data.map(({ place_id, description }) => (
// //     <option key={place_id} value={description} />
// // ))}

// {/* <select><option>{renderSuggestions()}</option></select> */}
// {/* <div ref={ref}>
//             <h2>Autocomplete coming soon!</h2>
//             {/* <input
//                 value={value}
//                 onChange={handleInput}
//                 disabled={!ready}
//                 placeholder="Where are you going?"
//                 className="map-input"
//             /> */}
//             {/* We can use the "status" to decide whether we should display the dropdown or not */}
//             {/* <ul>
//                 {status === "OK" && data.map(({ place_id, description }) => (<option key={place_id} value={description}></option>
//                 ))}
//             </ul> */}
//         </div> */}