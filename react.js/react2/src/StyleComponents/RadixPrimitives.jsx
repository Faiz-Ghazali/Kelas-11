import { DropdownMenu, Button, Theme, Text, Quote} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
function RadixPrimitives() {
return (
    <div>
    <Theme>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant="soft">Options</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
            <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Theme>
      <Text>
            His famous quote,{" "}
            <Quote>Styles come and go. Good design is a language, not a style</Quote>,
            elegantly summs up Massimos philosophy of design.
        </Text>

       
    </div>
  )
}

export default RadixPrimitives
