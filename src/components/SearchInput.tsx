import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchKeyword: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInput.current?.value) onSearch(searchInput.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchInput}
          variant="filled"
          borderRadius={20}
          placeholder="Search Games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
