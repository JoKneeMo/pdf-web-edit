﻿namespace PDFWebEdit.Models.Config
{
    /// <summary>
    /// A general configuration.
    /// </summary>
    public class GeneralConfig
    {
        /// <summary>
        /// Gets or sets a value indicating whether the tour is enabled.
        /// </summary>
        /// <value>
        /// True if enable tour, false if not.
        /// </value>
        public bool EnableTour { get; set; } = true;

        /// <summary>
        /// Gets or sets the default folder.
        /// </summary>
        /// <value>
        /// The default folder.
        /// </value>
        public string DefaultFolder { get; set; } = "Input";

        /// <summary>
        /// Gets or sets the default sort column.
        /// </summary>
        /// <value>
        /// The default sort column.
        /// </value>
        public string DefaultSortColumn { get; set; } = "Name";

        /// <summary>
        /// Gets or sets the default sort direction.
        /// </summary>
        /// <value>
        /// The default sort direction.
        /// </value>
        public string DefaultSortDirection { get; set; } = "Asc";
    }
}