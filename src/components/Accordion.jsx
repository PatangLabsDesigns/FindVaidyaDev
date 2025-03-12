import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function CustomAccordion({ title, children, open }) {
    return (
        <Accordion.Root type="single" collapsible defaultValue={open ? "item-1" : undefined}>
            <Accordion.Item value="item-1">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full p-4 bg-gray-100">
                        {title}
                        <ChevronDownIcon />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-4 border">
                    {children}
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    );
}
