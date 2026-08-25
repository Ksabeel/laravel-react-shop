import { InertiaLinkProps } from '@inertiajs/react';
import ActionLink from './ActionLink';

export default function EditButton({
    href,
    children,
}: Pick<InertiaLinkProps, 'href' | 'children'>) {
    return (
        <ActionLink href={href} variant="yellow">
            {children ?? 'Edit'}
        </ActionLink>
    );
}
