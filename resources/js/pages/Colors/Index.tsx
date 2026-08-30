import { Head } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { Color, Pagination } from '@/types';
import PaginationColor from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import PageTitle from '@/components/PagTitle';
import { Table } from '@/components/Table';
import EditButton from '@/components/ui/ActionButtons/EditButton';
import DeleteButton from '@/components/ui/ActionButtons/DeleteButton';

interface ColorsIndexProps {
    colors: Pagination<Color>;
}

export default function ColorsIndex({ colors }: ColorsIndexProps) {
    console.log(colors);

    return (
        <>
            <Head title="Colors" />
            <div className="p-6">
                <PageTitle heading="Colors" href="/colors/create">
                    <Plus className="h-4 w-4" />
                    Add Color
                </PageTitle>

                {colors.data.length > 0 ? (
                    <div className="overflow-x-auto rounded-lg shadow">
                        <Table
                            data={colors.data}
                            columns={[
                                {
                                    header: 'ID',
                                    render: (color) => color.id,
                                },
                                {
                                    header: 'Name',
                                    render: (color) => color.name,
                                },
                                {
                                    header: 'Hex',
                                    render: (color) => color.hex,
                                },
                                {
                                    header: 'Actions',
                                    render: (color) => (
                                        <div className="flex gap-2">
                                            <EditButton
                                                href={`/colors/${color.id}/edit`}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </EditButton>
                                            <DeleteButton
                                                href={`/colors/${color.id}`}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </DeleteButton>
                                        </div>
                                    ),
                                },
                            ]}
                        />

                        {colors.last_page > 1 && (
                            <PaginationColor pagination={colors} />
                        )}
                    </div>
                ) : (
                    <EmptyState
                        description="No colors yet"
                        href="/colors/create"
                    >
                        <Plus className="h-4 w-4" />
                        Add Color
                    </EmptyState>
                )}
            </div>
        </>
    );
}

ColorsIndex.layout = {
    breadcrumbs: [{ title: 'Colors', href: '/colors' }],
};
