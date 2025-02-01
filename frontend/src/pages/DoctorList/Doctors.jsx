"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  {
    id: "d1",
    name: "Dr. Ananya Verma",
    specialization: "Cardiologist",
    email: "ananyaverma@gmail.com",
    phone: "+91 98765 43210",
    experience: "14 years",
    location: "Mumbai",
    address: "A-101, Hiranandani Towers, Powai, Mumbai",
    status: "Available",
  },
  {
    id: "d2",
    name: "Dr. Rajesh Kumar",
    specialization: "Dermatologist",
    email: "rajeshkumar@yahoo.com",
    phone: "+91 87654 32109",
    experience: "10 years",
    location: "Delhi",
    address: "45, Connaught Place, New Delhi",
    status: "On Leave",
  },
  {
    id: "d3",
    name: "Dr. Priya Sharma",
    specialization: "Neurologist",
    email: "priyasharma@gmail.com",
    phone: "+91 76543 21098",
    experience: "12 years",
    location: "Bangalore",
    address: "12, MG Road, Indiranagar, Bangalore",
    status: "Available",
  },
  {
    id: "d4",
    name: "Dr. Alok Mehta",
    specialization: "Orthopedic",
    email: "alokmehta@gmail.com",
    phone: "+91 65432 10987",
    experience: "18 years",
    location: "Hyderabad",
    address: "Greenwood Residency, Banjara Hills, Hyderabad",
    status: "Busy",
  },
  {
    id: "d5",
    name: "Dr. Sneha Patil",
    specialization: "Pediatrician",
    email: "snehapatil@hotmail.com",
    phone: "+91 54321 09876",
    experience: "9 years",
    location: "Chennai",
    address: "Flat No. 7, Anna Nagar, Chennai",
    status: "Available",
  },
]

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Doctor Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "specialization",
    header: "Specialization",
    cell: ({ row }) => <div>{row.getValue("specialization")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div>{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "experience",
    header: "Experience",
    cell: ({ row }) => <div>{row.getValue("experience")}</div>,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <div>{row.getValue("location")}</div>,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
  },
]

function Doctors() {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="flex justify-center items-center mb-20 mt-9">
      <div className="w-full lg:w-3/4">
        {/* Filter Input */}
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by name..."
            value={(table.getColumn("name")?.getFilterValue()) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        </div>

        {/* Table */}
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Doctors;