import { DropdownMenu, Button, Theme, Text, HoverCard, Flex, Link, Box, Avatar, Heading} from "@radix-ui/themes";
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
            Follow{" "}
            <HoverCard.Root>
                <HoverCard.Trigger>
                    <Link href="https://twitter.com/radix_ui" target="_blank">
                        @radix_ui
                    </Link>
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="300px">
                    <Flex gap="4">
                        <Avatar
                            size="3"
                            fallback="R"
                            radius="full"
                            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                        />
                        <Box>
                            <Heading size="3" as="h3">
                                Radix
                            </Heading>
                            <Text as="div" size="2" color="gray" mb="2">
                                @radix_ui
                            </Text>
                            <Text as="div" size="2">
                                React components, icons, and colors for building high-quality,
                                accessible UI.
                            </Text>
                        </Box>
                    </Flex>
                </HoverCard.Content>
            </HoverCard.Root>{" "}
            for updates.
        </Text>

       
    </div>
  )
}

export default RadixPrimitives
