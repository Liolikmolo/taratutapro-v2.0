import React from 'react';
import {Icon} from "@iconify/react";

const StarRating = ({count = 0, totalStars = 5, color = "#F59E0B"}) => {
    return (
        <div className = "flex gap-1">
            {[...Array(totalStars)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                    <Icon
                        key = {i}
                        icon = {
                            ratingValue <= count
                                ? "fluent:star-32-filled"
                                : ratingValue - 0.5 === count
                                    ? "fluent:star-half-12-regular"
                                    : "fluent:star-32-regular"
                        }
                        width = {20}
                        height = {20}
                        style = {{color: color}}
                    />
                )
            })}
        </div>
    );
};

export default StarRating;