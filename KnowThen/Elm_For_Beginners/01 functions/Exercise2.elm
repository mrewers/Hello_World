module Exercise2 exposing (..)

import Html exposing (..)
import String

uppercaseName maxLength name =
  if String.length name > maxLength then
        String.toUpper name
  else
      name

name =
    let
        name =
            "Marek Rewers"

        length =
            String.length name
    in
        (capitalize 10 name)
            ++ " - name length: "
            ++ (toString length)
            |> Html.text