import React from "react";
import "./siteHeader.css";
import { Link } from "react-router-dom";

const SiteHeader = ({
    title = "Site Title",
    backgroundImage,
    navItems = [],
    subtitle,
    pageTitle,
    children,
}) => {
    return (
        <div
            className="site-header"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="site-dimmer">
                <div className="site-top">

                    <div className="site-title">
                        {title}
                    </div>

                    <div className="site-nav">
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.to}
                                style={{ textDecoration: "none" }}
                            >
                                <div className="site-nav-item">
                                    {item.label}
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

                {/* CENTER CONTENT */}
                <div className="site-page-title-container">
                    {pageTitle && (
                        <div className="site-page-title">
                            {pageTitle}
                        </div>
                    )}

                    {subtitle && (
                        <div className="site-subtitle">
                            {subtitle}
                        </div>
                    )}

                    {children}
                </div>

            </div>
        </div>
    );
};

export default SiteHeader;