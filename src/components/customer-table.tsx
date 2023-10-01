import { CustomerTableValues } from "@/types/types";
import { Table, TableHead, TableRow, TableCell, TableBody, } from "@aws-amplify/ui-react";

interface CustomerTableProps {
    tableName: string;
    data: CustomerTableValues[];
}

export default function CustomerTable({ tableName, data }: CustomerTableProps){
    return (
        <Table width="50%" margin="0 auto">
            <TableHead>
                <TableRow>
                    <TableCell as="th">ID</TableCell>
                    <TableCell as="th">Name</TableCell>
                    <TableCell as="th">Phone</TableCell>
                    <TableCell as="th">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, key) => (
                    <TableRow key={key}>
                        <TableCell>{item?.id}</TableCell>
                        <TableCell>{item?.first}{" "}{item?.last}</TableCell>
                        <TableCell>{item?.phone}</TableCell>
                        <TableCell>{item?.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}