import { ComponentType, useReducer, useState, ChangeEvent } from "react";
import { DebounceInput } from "react-debounce-input";
import { DateRangeInput } from "@datepicker-react/styled";
import { Flex, Box, Button } from "rebass";
import { ThemeProvider } from "styled-components";
import styled from "@emotion/styled";

const datepickerPhrases = {
  datepickerStartDatePlaceholder: "Select",
  datepickerStartDateLabel: "Start date:",
  datepickerEndDatePlaceholder: "Select",
  datepickerEndDateLabel: "End date:",
  resetDates: "Reset dates",
  close: "Close",
};

const dateRangeInputPhrases = {
  ...datepickerPhrases,
  startDateAriaLabel: "Start date",
  endDateAriaLabel: "End date",
  startDatePlaceholder: "Start date",
  endDatePlaceholder: "End date",
};

const SearchInput: ComponentType = styled("input")`
  width: 100%;
  height: 48px;
  border-color: transparent;
  padding: 0px 10px;
  border: 1px solid #bcbec0;
  border-radius: 2px;
  font-family: system-ui, -apple-system;
  color: #001217;
  font-size: 14px;
  font-weight: 600;
`;

const ButtonStyle = {
  width: "100%",
  height: 48,
  border: "1px solid #bcbec0",
  borderRadius: "2px",
  fontFamily: "system-ui, -apple-system",
  color: "#001217",
  fontSize: "14px",
  fontWeight: 600,
  backgroundColor: "transparent",
  cursor: "pointer",
};

const ThemeDatePicker = {
  breakpoints: ["32em", "48em", "64em"],
  reactDatepicker: {
    daySize: [36, 40],
    fontFamily: "system-ui, -apple-system",
    colors: {
      accessibility: "#f5a85e",
      selectedDay: "#f7d551",
      selectedDayHover: " #f8c168",
      primaryColor: "#f5a85e",
    },
    dateRangeGridTemplateColumns: {
      gridTemplateColumns: "44% 12% 44%",
    },
    dateRangeStartDateInputPadding: "0 38px",
    dateRangeEndDateInputPadding: "0 38px",
  },
};

interface IHomeSearchInputProps {
  onInputChange: Function;
}

const HomeSearchInput = (props: IHomeSearchInputProps) => {
  const { onInputChange } = props;
  const [query, setQuery] = useState<string>("");

  const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  };

  function reducer(state: any, action: { type: any; payload: any }) {
    switch (action.type) {
      case "focusChange":
        return { ...state, focusedInput: action.payload };
      case "dateChange":
        return action.payload;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (!query) {
      setQuery("");
      return;
    }
    setQuery(query);
  };

  return (
    <Flex mt={30} flexDirection="column">
      <Flex alignItems="center">
        <Box pl={2} width="40%">
          <DebounceInput
            element={SearchInput}
            minLength={3}
            debounceTimeout={500}
            placeholder="Search case descriptions..."
            onChange={handleInputChange}
          />
        </Box>
        <Box pl={2} width="40%">
          <ThemeProvider theme={ThemeDatePicker}>
            <DateRangeInput
              onDatesChange={(data) =>
                dispatch({ type: "dateChange", payload: data })
              }
              onFocusChange={(focusedInput) =>
                dispatch({ type: "focusChange", payload: focusedInput })
              }
              startDate={state.startDate} // Date or null
              endDate={state.endDate} // Date or null
              focusedInput={state.focusedInput} // START_DATE, END_DATE or null
              phrases={dateRangeInputPhrases}
            />
          </ThemeProvider>
        </Box>
        <Box pl={2} width="20%">
          <Button
            variant="outline"
            mr={2}
            sx={ButtonStyle}
            onClick={() => {
              onInputChange(query);
            }}
          >
            Find Cases
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeSearchInput;
