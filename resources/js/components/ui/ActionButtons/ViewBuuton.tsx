import { InertiaLinkProps } from '@inertiajs/react';
import ActionLink from './ActionLink';

export default function ViewButton({
    href,
    children,
}: Pick<InertiaLinkProps, 'href' | 'children'>) {
    return (
        <ActionLink href={href} variant="blue">
            {children ?? 'View'}
        </ActionLink>
    );
}
