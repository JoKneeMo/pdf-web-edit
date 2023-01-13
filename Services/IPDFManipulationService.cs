﻿using PDFWebEdit.Enumerations;

namespace PDFWebEdit.Services
{
    /// <summary>
    /// Interface for ipdf manipulation service.
    /// </summary>
    public interface IPDFManipulationService
    {
        /// <summary>
        /// Rotate clockwise.
        /// </summary>
        /// <param name="targetDirectory">Target directory.</param>
        /// <param name="document">The document.</param>
        /// <param name="pageNumbers">The page numbers.</param>
        public void RotateClockwise(TargetDirectory targetDirectory, string document, List<int> pageNumbers);

        /// <summary>
        /// Deletes the page.
        /// </summary>
        /// <param name="targetDirectory">Target directory.</param>
        /// <param name="document">The document.</param>
        /// <param name="pageNumbers">The page numbers.</param>
        public void DeletePage(TargetDirectory targetDirectory, string document, List<int> pageNumbers);

        /// <summary>
        /// Reorder pages.
        /// </summary>
        /// <param name="targetDirectory">Target directory.</param>
        /// <param name="document">The document.</param>
        /// <param name="newPageOrder">The new page order.</param>
        public void ReorderPages(TargetDirectory targetDirectory, string document, List<int> newPageOrder);

        /// <summary>
        /// Revert changes.
        /// </summary>
        /// <param name="targetDirectory">Target directory.</param>
        /// <param name="document">The document.</param>
        public void RevertChanges(TargetDirectory targetDirectory, string document);

        /// <summary>
        /// Unlocks an encrypted file.
        /// </summary>
        /// <param name="targetDirectory">Target directory.</param>
        /// <param name="document">The document.</param>
        /// <param name="password">The password.</param>
        public void Unlock(TargetDirectory targetDirectory, string document, string password);
    }
}
