import { InertiaLinkProps } from '@inertiajs/react';
import ActionLink from './ActionLink';

export default function DeleteButton({
    href,
    children,
}: Pick<InertiaLinkProps, 'href' | 'children'>) {
    return (
        <ActionLink
            href={href}
            method="delete"
            as="button"
            variant="red"
            confirmMessage="Are you sure?"
        >
            {children ?? 'Delete'}
        </ActionLink>
    );
}
