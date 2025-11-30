import React, { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "../index"; // брать прямо из исходников

type IconEntry = [string, React.ComponentType<any>];

const allIcons: IconEntry[] = Object.entries(Icons).filter(
    ([name, value]) => typeof value === "function" && name.endsWith("Icon")
);

const meta: Meta = {
    title: "Icons/Gallery",
    argTypes: {
        size: { control: { type: "range", min: 12, max: 128, step: 4 } },
        color: { control: "color" },
        strokeWidth: { control: { type: "range", min: 1, max: 4, step: 0.5 } },
        query: { control: "text" },
    },
    args: {
        size: 48,
        color: "#1f2937",
        strokeWidth: 2,
        query: "",
    },
};
export default meta;

type Story = StoryObj<{
    size: number;
    color: string;
    strokeWidth: number;
    query: string;
}>;

export const Gallery: Story = {
    render: ({ size, color, strokeWidth, query }) => {
        const [search, setSearch] = useState(query);

        const filtered = useMemo(
            () =>
                allIcons.filter(([name]) =>
                    name.toLowerCase().includes(search.toLowerCase())
                ),
            [search]
        );

        return (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <label>
                        Search:{" "}
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Arc, Circle..."
                            style={{ padding: "4px 8px", minWidth: 200 }}
                        />
                    </label>
                    <span style={{ fontSize: 12, color: "#666" }}>
            {filtered.length} / {allIcons.length}
          </span>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                        gap: 16,
                    }}
                >
                    {filtered.map(([name, Icon]) => (
                        <div
                            key={name}
                            style={{
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                                padding: 12,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 8,
                                background: "#fafafa",
                            }}
                        >
                            <Icon width={size} height={size} color={color} strokeWidth={strokeWidth} />
                            <div style={{ fontSize: 12, color: "#374151", textAlign: "center" }}>
                                {name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
};
